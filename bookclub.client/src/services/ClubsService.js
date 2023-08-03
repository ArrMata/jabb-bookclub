import { AppState } from "../AppState.js"
import { Club } from "../models/Club.js"
import { logger } from "../utils/Logger.js"
import Pop from "../utils/Pop.js"
import { api } from "./AxiosService.js"

class ClubsService {
  async getAllClubs() {
    const res = await api.get('api/clubs')

    logger.log('[GOT CLUBS]', res.data)
    AppState.clubs = res.data.map(pojo => new Club(pojo))
  }

  async getClubById(clubId) {
    const res = await api.get(`api/clubs/${clubId}`)

    logger.log('[GOT CLUB BY ID]', res.data)

    AppState.selectedClub = new Club(res.data)
  }

  async getMyClubs() {
    try {
      const res = await api.get('account/clubs')

      logger.log('[GOT ACCOUNT CLUBS]', res.data)
      AppState.myClubs = res.data.map(pojo => new Club(pojo))
    } catch (error) {
      Pop.error(error.message)
    }
  }

  async createClub(clubData) {
    const res = await api.post(`api/clubs`, clubData)
    logger.log(`[CREATED CLUB]`, res.data)
    return res.data
  }
}

export const clubsService = new ClubsService