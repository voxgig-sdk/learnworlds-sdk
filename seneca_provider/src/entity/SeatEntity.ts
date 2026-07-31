// Seat A

  function makeSeatActions() {
  
    const cmd: any = {}
  
  
  
  cmd.load = {
    action: async function load_seat(this: any, entize: any, msg: any) {
      const seatEntity = this.shared.sdk.Seat()
      const q = msg.q || {}
  
      const resdata = await seatEntity.load(q)
  
      let item = entize(resdata)
      return item
    }
  }
  
  
    // #ListOp
  
  
  // Create operation is implemented by seneca entity save
  
  
  cmd.save = {
    action: async function update_seat(this: any, entize: any, msg: any) {
      const seatEntity = this.shared.sdk.Seat()
      let reqdata = msg.ent.data$()
  
      const update = null !== reqdata.id
      const resdata = await (update ?
        seatEntity.update(reqdata) :
        seatEntity.create(reqdata))
  
      let item = null
  
      if (resdata) {
        item = entize(resdata)
      }
  
      return item
    }
  }
  
  
    // #RemoveOp
  
    return { cmd }
  }
  
  
  export {
    makeSeatActions
  }
