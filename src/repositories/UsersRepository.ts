import {EntityRepository, Repository} from "typeorm"

import { User } from "../database/entities/User"

@EntityRepository(User)
class UserRepository extends Repository<User>{

}

export {UserRepository}