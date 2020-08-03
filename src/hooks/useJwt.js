import { getJwtTokenFromStorage } from "../util/auth";

export default function useJwt () {
    return getJwtTokenFromStorage()
}
