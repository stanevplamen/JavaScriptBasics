
define(["jquery"], function ($) {
    function getJSON(serviceUrl) {

        var deferred = $.Deferred();

        $.ajax({
            url: serviceUrl,
            type: "GET",
            async: true,
            success: function (data) {
                var items = JSON.parse(data);
                deferred.resolve(items);
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
            success: function (data) {
                var items = JSON.parse(data);
                deferred.resolve(items);
            },
            error: function (data) {
                deferred.reject(this);
            }
        });
        return deferred.promise();
	}

	return {
		getJSON: getJSON,
		postJSON: postJSON
	}
});