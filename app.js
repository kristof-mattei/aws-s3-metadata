var AWS = require("aws-sdk");

var s3 = new AWS.S3({
    region: "eu-west-1",
    signatureVersion: "v4"
});

// now for a given bucket put an object:
s3.putObject({
    Bucket: "metadata-test",
    Key: "MyFile.txt",
    Body: "Test1234",
    Metadata: {
        "foo": "bar",
        "FOO": "bar"
    }
}, function (err, data) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(data);
    }
});
