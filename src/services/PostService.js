import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class PostService {
  async getAllPost() {
    const res = await api.get('/posts')
    logger.log(res.data)
    AppState.posts = res.data
  }

  async createPost() {
    const res = await api.post('/api/posts')
    logger.log(res.data)
    await this.getAllPost()
  }

  async destroy(id) {
    await api.delete('/api/posts' + id)
    AppState.posts = AppState.posts.filter(p => p.id !== id)
  }
}
export const postService = new PostService()
