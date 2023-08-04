import { AppState } from "../AppState.js"
import { PostComment } from "../models/PostComment.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class PostCommentsService {
  async createComment(commentData) {
    const res = await api.post('api/comments', commentData)
    logger.log('[creating comment...svc]', res.data)
    const postComment = new PostComment(res.data)
    AppState.postComments.push(commentData)
    return postComment
  }

  async deleteComment(commentId) {
    const res = await api.delete(`api/comments/${commentId}`)
    // logger.log('[Deleting comment from svc...]', res.data)
    AppState.postComments = AppState.postComments.filter(comment => comment.id != commentId)
  }
}

export const postCommentsService = new PostCommentsService()