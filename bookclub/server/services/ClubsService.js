import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class ClubsService {
  async getClubs() {
    const clubs = await dbContext.Clubs.find()
      .populate('creator', 'name picture')
      .populate('memberCount')
    return clubs
  }
  async getClubById(clubId) {
    const club = await dbContext.Clubs.findById(clubId)
    if (!club) {
      throw new BadRequest(`There is no club with id of ${clubId}`)
    }
    await club.populate('creator', 'name picture')
    await club.populate('memberCount')
    return club
  }

  async createClub(clubData) {
    const club = await dbContext.Clubs.create(clubData)
    await club.populate('creator', 'name picture')
    await club.populate('memberCount')
    return club
  }
  async updateClub(clubId, userId, clubData) {
    const originalClub = await this.getClubById(clubId)
    if (originalClub.creatorId.toString() != userId) {
      throw new Forbidden(`You aren't the creator of ${originalClub.name}, you can't update it!`)
    }
    originalClub.name = clubData.name || originalClub.name
    originalClub.description = clubData.description || originalClub.description
    originalClub.coverImg = clubData.coverImg || originalClub.coverImg

    let updatedClub = await originalClub.save()

    return updatedClub
  }
  async removeClub(clubId, userId) {
    const clubToDelete = await this.getClubById(clubId)
    if (clubToDelete.creatorId.toString() != userId) {
      throw new Forbidden("You aren't the creator of this club, you can NOT delete it.")
    }
    await clubToDelete.remove()
  }
}
export const clubsService = new ClubsService()