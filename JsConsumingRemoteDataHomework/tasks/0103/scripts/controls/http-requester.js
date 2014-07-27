
define(["jquery"], function ($) {
    function getJSON(serviceUrl) {

        var deferred = $.Deferred();

        $.ajax({
            url: serviceUrl,
            type: "GET",
            async: true,
            success: function (data) {
                try {
                    var items = JSON.parse(data);
                    deferred.resolve(items);
                } catch (e) {
                    deferred.resolve(data);
                }
            },
            error: function (data) {
                deferred.reject(this);
          }
        });

        return deferred.promise();
	}

    function postJSON(serviceUrl, data) {

        var deferred = $.Deferred();

        $.ajax({
            url: serviceUrl,
            type: "POST",
            async: true,
            data: data,
            success: function (data) {
                //var items = JSON.parse(data);
                deferred.resolve(data);
            },
            error: function (data) {
                deferred.reject(this);
            }
        });

        return deferred.promise();
    }

    function deleteJSON(serviceUrl, data) {

        var deferred = $.Deferred();

        $.ajax({
            url: serviceUrl,
            type: "POST",
            async: true,
            data: {
                _method: 'delete'
            },
            success: function (data) {
                //var items = JSON.parse(data);
                deferred.resolve(data);
            },
            error: function (data) {
                deferred.reject(this);
            }
        });

        return deferred.promise();
    }

	return {
		getJSON: getJSON,
		postJSON: postJSON,
		deleteJSON: deleteJSON
	}
});