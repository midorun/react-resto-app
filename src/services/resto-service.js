export default class RestoService {
  constructor() {
    this._rootUrl = 'http://localhost:3001'
  }
  getData = async (url) => {
    const response = await fetch(this._rootUrl + url)

    if (!response.ok) {
      throw new Error("Couldn't fetch data from ")
    }

    return await response.json()
  }

  getMenuItems = async () => {
    return await this.getData('/menu')
  }

  addOrderToDB = async (orderItems) => {
    const order = {
      orderItems
    }

    const response = await fetch(this._rootUrl + '/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(order)
    })

    return response.json()
  }
};
