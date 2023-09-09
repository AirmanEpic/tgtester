import { userDataResponse, userDataInput } from '@/types/main'
import { endpointSchema, schema } from 'typegenius/types'

interface userEndpointPost extends endpointSchema {
    endpointPath: "/api/user",
    type: "POST",
    accepts: userDataInput,
    returns: userDataResponse
}

export default interface exportedSchema extends schema {
    endpoints: [userEndpointPost]
}
