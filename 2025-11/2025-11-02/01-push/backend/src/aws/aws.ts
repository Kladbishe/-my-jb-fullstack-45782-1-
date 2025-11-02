import { CreateBucketCommand, S3Client } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import config from "config";

const s3Connection = JSON.parse(JSON.stringify(config.get<Object>("s3.connection")))

const s3Config = config.get('s3.connection')

const s3Client = new S3Client(s3Config)

export async function createAppBucketIfNotExists() {
    try{

        await s3Client.send(
            new CreateBucketCommand({
                Bucket: config.get<string>("s3.bucket")
            })
        )

    }catch(e){
        console.log('bucket creation failed', e)
    }
}
export async function testUpload() {
    try{
        const upload = new Upload({
            client: s3Client,
            params:{
                Bucket: config.get<string>("s3.bucket"),
                Key: "test.txt",
                ContentType: 'test/plain',
                Body:"hello world, localstack seems to work"

            }
        })
        const result = await upload.done()
    }catch(e){
        console.log(e)
    }
}