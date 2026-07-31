// Reporting A

  function makeReportingActions() {
  
    const cmd: any = {}
  
    // #LoadOp
  
  
  cmd.list = {
    action: async function list_reporting(this: any, entize: any, msg: any) {
      const reportingEntity = this.shared.sdk.Reporting()
      const q = msg.q || {}
  
      const reportingList = await reportingEntity.list(q)
      const dataList = reportingList.map((n: any) => n.data())
  
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
    makeReportingActions
  }
