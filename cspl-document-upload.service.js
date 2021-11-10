(function() {
	'use strict';
	angular
	.module('csplDocumentUploadModule')
	.factory('DocumentUpload', DocumentUpload);

	DocumentUpload.$inject = ['$resource'];

	function DocumentUpload ($resource) {
		var resourceUrl =  'api/orgId/:orgId/document-upload/:id';

		return $resource(resourceUrl, {}, {
            'upload': {
            	headers: {'Content-Type': undefined},	
            	method: 'POST', 
                params: {orgId:'@orgId', uploadType:'@uploadType',buId:'@buId',uploadCategoryId:'@uploadCategoryId'},
                url: '/api/org/:orgId/files/:uploadType/:buId/:uploadCategoryId/upload'	
            }
		});
	}
})();
