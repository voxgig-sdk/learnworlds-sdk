// UnitAnalytics A

  function makeUnitAnalyticsActions() {
  
    const cmd: any = {}
  
  
  
  cmd.load = {
    action: async function load_unit_analytics(this: any, entize: any, msg: any) {
      const unit_analyticsEntity = this.shared.sdk.UnitAnalytics()
      const q = msg.q || {}
  
      const resdata = await unit_analyticsEntity.load(q)
  
      let item = entize(resdata)
      return item
    }
  }
  
  
    // #ListOp
  
    // #CreateOp
  
    // #UpdateOp
  
    // #RemoveOp
  
    return { cmd }
  }
  
  
  export {
    makeUnitAnalyticsActions
  }
