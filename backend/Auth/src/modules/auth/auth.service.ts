import { loginPayload, registerPayload } from "./model"
import ApiError from "../../common/api-error"
import { db } from "../../db/config"
import { usersTable } from "../../db/schema"
import { eq } from "drizzle-orm"
import { createHmac, randomBytes } from "node:crypto"
import ApiResponse from "../../common/api-response"

class AuthService {
  public static async register(body: unknown) {
    const validationResult = registerPayload.safeParse(body)
    console.log(validationResult, body);
    if (validationResult.error)
      throw ApiError.badRequest(validationResult.error.message)

    const { firstName, lastName, email, password } = validationResult.data

    const existingUser = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email))

    if (existingUser.length > 0)
      throw ApiError.badRequest("User with email " + email + " already exist")

    const salt = randomBytes(32).toString("hex")
    const hash = createHmac('sha256', salt).update(password).digest("hex")

    const [result] = await db.insert(usersTable).values({
      firstName,
      lastName,
      email,
      password: hash,
      salt,
    }).returning({id: usersTable.id})

    return result?.id;
  }

  public static async login(body: unknown){
    const validationResult = loginPayload.safeParse(body);

  }
}

export default AuthService;
