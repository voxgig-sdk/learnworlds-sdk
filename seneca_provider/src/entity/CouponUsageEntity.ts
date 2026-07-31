// CouponUsage A

  function makeCouponUsageActions() {
  
    const cmd: any = {}
  
    // #LoadOp
  
  
  cmd.list = {
    action: async function list_coupon_usage(this: any, entize: any, msg: any) {
      const coupon_usageEntity = this.shared.sdk.CouponUsage()
      const q = msg.q || {}
  
      const coupon_usageList = await coupon_usageEntity.list(q)
      const dataList = coupon_usageList.map((n: any) => n.data())
  
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
    makeCouponUsageActions
  }
