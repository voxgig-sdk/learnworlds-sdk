// MultipleSeat A

  function makeMultipleSeatActions() {
  
    const cmd: any = {}
  
    // #LoadOp
  
  
  cmd.list = {
    action: async function list_multiple_seat(this: any, entize: any, msg: any) {
      const multiple_seatEntity = this.shared.sdk.MultipleSeat()
      const q = msg.q || {}
  
      const multiple_seatList = await multiple_seatEntity.list(q)
      const dataList = multiple_seatList.map((n: any) => n.data())
  
      let items = dataList.map((data: any) => entize(data))
      return items
    }
  }
  
  
  // Create operation is implemented by seneca entity save
  
    // #UpdateOp
  
  
  cmd.remove = {
    action: async function remove_multiple_seat(this: any, entize: any, msg: any) {
      const multiple_seatEntity = this.shared.sdk.MultipleSeat()
      let reqdata = msg.ent.data$()
  
      const resdata = await multiple_seatEntity.remove(reqdata)
  
      let item = null
  
      if (resdata) {
        item = entize(resdata)
      }
  
      return item
    }
  }
  
    return { cmd }
  }
  
  
  export {
    makeMultipleSeatActions
  }
