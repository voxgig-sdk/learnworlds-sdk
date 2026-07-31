// Calendar A

  function makeCalendarActions() {
  
    const cmd: any = {}
  
    // #LoadOp
  
  
  cmd.list = {
    action: async function list_calendar(this: any, entize: any, msg: any) {
      const calendarEntity = this.shared.sdk.Calendar()
      const q = msg.q || {}
  
      const calendarList = await calendarEntity.list(q)
      const dataList = calendarList.map((n: any) => n.data())
  
      let items = dataList.map((data: any) => entize(data))
      return items
    }
  }
  
    // #CreateOp
  
    // #UpdateOp
  
    // #RemoveOp
  
    return { cmd }
  }
  
  
  export {
    makeCalendarActions
  }
