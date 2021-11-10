(function() {
    'use strict';

    angular
        .module('csplDocumentUploadModule')
        .component('csplDocumentUpload', {
            bindings: {
                
            },
            templateUrl: '/node_modules/cspl-document-upload/cspl-document-upload.html',
            controller: csplDocumentUploadController,
            controllerAs: 'vm'
        });

        csplDocumentUploadController.$inject = ['$scope'];

    function csplDocumentUploadController($scope) {

        // Scope Variable's
        var vm = this;
        
        vm.onUpload = onUpload;

        function onUpload() {
                    
            var modalOptions = {
                templateUrl: 'app/components/cspl-document-upload/document-upload-dialog.html',
                controller: 'DocumentUploadDialogController',
                controllerAs: 'vm',
                backdrop: 'static',
                size: 'sm',
                resolve: {
                    "params": function() {
                        return {};
                    },
                    entity: function() {
                        return {};
                    }
                }
            };

            $uibModal.open(modalOptions);
                
        }

    }
})();
