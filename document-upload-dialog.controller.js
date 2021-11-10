(function () {
	'use strict';

	angular.module('csplDocumentUploadModule')
		.controller('DocumentUploadDialogController', DocumentUploadDialogController);

        DocumentUploadDialogController.$inject = ['$scope', 'DocumentUpload'];

	function DocumentUploadDialogController($scope, DocumentUpload) {

		// Scope Variable's
		var vm = this;
		vm.filesList = [];

        vm.processUpload = processUpload;
        vm.cancel = cancel;
        vm.onload = onload;

        function onload() {
			document.getElementById("uploadPath").addEventListener("change", uploadPathChangeEventListener);
		}

        function uploadPathChangeEventListener(event) {

			// read each selected files and push the selected files
			// to filesList
			angular.forEach(event.target.files, function (value) {
				prepareAndPushFile(value);
			});

			// Trigger Digest Cycle
			$scope.$digest();
		}

        function prepareAndPushFile(selectedFile) {
			var isDuplicateValue = false;
			if (vm.filesList.length != 0) {
				angular.forEach(vm.filesList, function (file, key) {
					if (file.name == selectedFile.name) {
						isDuplicateValue = true;
					}
				});
			}
			if (!isDuplicateValue) {
				vm.filesList.push(selectedFile);
			}
		}

        function processUpload(){
            var fd = new FormData();
			for (var x = 0; x < vm.filesList.length; x++) {
				fd.append("file", vm.filesList[x]);
			}

            return DocumentUpload.upload({
                "orgId": 5000,
                "uploadType": 'Manual',
                "buId": -1,
                "uploadCategoryId": -1
            }, fd, onSaveSuccess, onSaveError);

            
        }

        function onSaveSuccess(result) {
            $scope.$close(result);
         }
 
         function onSaveError(result) {
         }

         function cancel(){
            $scope.$close('cancel');
         }
	}
})();
