var request = require("request");

var options = {
    method: 'POST',
    url: 'https://dev-j8guxytu.auth0.com/api/v2/tickets/email-verification',
    headers: { authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5FSTBNVE14UWpJelJEUkNOREEwUVVNNVJrUXlOemhCT0RjMlFUTkJNa1EzTmtNNVFrTTFSQSJ9.eyJpc3MiOiJodHRwczovL2Rldi1qOGd1eHl0dS5hdXRoMC5jb20vIiwic3ViIjoiMkVpbUNyZ1FOV2NVbXdvRFYyakJ2RzhmU0w1d3E2bnRAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vZGV2LWo4Z3V4eXR1LmF1dGgwLmNvbS9hcGkvdjIvIiwiaWF0IjoxNTc3NDE4ODgxLCJleHAiOjE1Nzc1MDUyODEsImF6cCI6IjJFaW1DcmdRTldjVW13b0RWMmpCdkc4ZlNMNXdxNm50Iiwic2NvcGUiOiJyZWFkOnVzZXJzIHVwZGF0ZTp1c2VycyBkZWxldGU6dXNlcnMgY3JlYXRlOnVzZXJzIGNyZWF0ZTp1c2VyX3RpY2tldHMiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.qKlt8C91UMIbxXkadWHPH6Oy7x0xlNx72xQU6VZyunhtluStQPOdtd6GIOt7xNapp_2ZpCw5ZryLZou5O8XCzSUZlgrDOAP5RpVczOZ7XFqqc5_-k76AkwRCCbiUY4aHmKabJ0CyKA8QAvppju6ncsTGn5RGE2-q1UwtroJLV3hXat_i5dd_g80Kv5n8MPCFmd7HJXtZigj2Re4xGhKKt_DtVvtm8PPqrSBo0t1c0vE74dciotGIRuODt5yGHzzVLec9g0Q68UmFq0BvZFv0vsK1h0YMAUzdLwOTiOQn5fgfHfIHS2qLCjrMbU_siwihci1ZN3ly5ocfXDlhMRdUHw' },
    body: { user_id: 'abcd|1234', client_id: 'xyz789' },
    json: true
};

request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
});


var options = {
    method: 'POST',
    url: 'https://dev-j8guxytu.auth0.com/api/v2/tickets/password-change',
    headers: { authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5FSTBNVE14UWpJelJEUkNOREEwUVVNNVJrUXlOemhCT0RjMlFUTkJNa1EzTmtNNVFrTTFSQSJ9.eyJpc3MiOiJodHRwczovL2Rldi1qOGd1eHl0dS5hdXRoMC5jb20vIiwic3ViIjoiMkVpbUNyZ1FOV2NVbXdvRFYyakJ2RzhmU0w1d3E2bnRAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vZGV2LWo4Z3V4eXR1LmF1dGgwLmNvbS9hcGkvdjIvIiwiaWF0IjoxNTc3NDE4ODgxLCJleHAiOjE1Nzc1MDUyODEsImF6cCI6IjJFaW1DcmdRTldjVW13b0RWMmpCdkc4ZlNMNXdxNm50Iiwic2NvcGUiOiJyZWFkOnVzZXJzIHVwZGF0ZTp1c2VycyBkZWxldGU6dXNlcnMgY3JlYXRlOnVzZXJzIGNyZWF0ZTp1c2VyX3RpY2tldHMiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.qKlt8C91UMIbxXkadWHPH6Oy7x0xlNx72xQU6VZyunhtluStQPOdtd6GIOt7xNapp_2ZpCw5ZryLZou5O8XCzSUZlgrDOAP5RpVczOZ7XFqqc5_-k76AkwRCCbiUY4aHmKabJ0CyKA8QAvppju6ncsTGn5RGE2-q1UwtroJLV3hXat_i5dd_g80Kv5n8MPCFmd7HJXtZigj2Re4xGhKKt_DtVvtm8PPqrSBo0t1c0vE74dciotGIRuODt5yGHzzVLec9g0Q68UmFq0BvZFv0vsK1h0YMAUzdLwOTiOQn5fgfHfIHS2qLCjrMbU_siwihci1ZN3ly5ocfXDlhMRdUHw' },
    body: {
        result_url: 'YOUR_APP_CALLBACK_URL',
        user_id: 'USER_ID',
        new_password: 'secret',
        connection_id: 'con_0000000000000001',
        email: 'EMAIL',
        ttl_sec: 0
    },
    json: true
};

request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
});