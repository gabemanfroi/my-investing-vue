import { defineStore } from 'pinia'
import { tokenUtil } from '@/modules/Shared/utils/tokenUtil'

export const usePortfolioStore = defineStore('portfolio', {
  state: () => ({
    portfolio: null as null | {
      portfolioId: string
    }
  }),
  actions: {
    setPortfolioId(portfolioId: string) {
      this.portfolio = { portfolioId }
    },
    initialize() {
      if (tokenUtil.getToken()) {
        const { portfolioId } = tokenUtil.decodeToken(tokenUtil.getToken() as string)
        this.portfolio = { portfolioId }
      }
    }
  }
})
