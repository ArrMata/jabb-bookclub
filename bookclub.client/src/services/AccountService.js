import { AppState } from '../AppState'
import { Account } from '../models/Account.js'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class AccountService {
  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = new Account(res.data)
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }
  async editAccount(body) {
    try {
      const res = await api.put('/account', body)
      // logger.log('updating account needsTour', res.data)
      AppState.account = new Account(res.data)
    } catch (error) {
      logger.error(error)
    }
  }
  // async editAccount(accountData) {
  //   const res = await api.put('/account', accountData)

  //   logger.log('[EDITED ACCOUNT]', res.data)

  //   const updatedAccount = new Account(res.data)

  //   AppState.account = updatedAccount
  // }
}

export const accountService = new AccountService()
