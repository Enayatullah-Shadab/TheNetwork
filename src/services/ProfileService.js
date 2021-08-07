import { AppState } from '../AppState'
import { api } from './AxiosService'

class ProfileService {
  async getProfileBySearching() {
    const res = await api.get('/api/profile')
    AppState.profiles = res.data
  }

  async getProfileById(id) {
    const res = await api.get('/api/profile')
    AppState.ProfileById = res.data
  }
}
export const profileService = new ProfileService()
