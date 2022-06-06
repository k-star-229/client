import { SNSClient} from "@aws-sdk/client-sns";
const REGION = "us-east-1";

const snsClient = new SNSClient({
    region: REGION,
    credentials: {
        accessKeyId: 'AKIARMSKR2UG32ND7XEX',
        secretAccessKey: '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'
    }
});

export  { snsClient };