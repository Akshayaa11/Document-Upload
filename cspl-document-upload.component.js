(function() {
    'use strict';

    angular
        .module('csplDocumentUpload')
        .component('csplDocUpload', {
            bindings: {
                
            },
            templateUrl: 'bower_components/cspl-document-upload/cspl-document-upload.html',
            controller: csplDocumentUploadController,
            controllerAs: 'vm'
        });

        csplDocumentUploadController.$inject = ['$scope', '$uibModal'];

    function csplDocumentUploadController($scope, $uibModal) {

        // Scope Variable's
        var vm = this;
        
        vm.onUpload = onUpload;

        function onUpload() {
                    
            var modalOptions = {
                templateUrl: 'bower_components/cspl-document-upload/document-upload-dialog.html',
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
