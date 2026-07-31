// Community A

  function makeCommunityActions() {
  
    const cmd: any = {}
  
    // #LoadOp
  
  
  cmd.list = {
    action: async function list_community(this: any, entize: any, msg: any) {
      const communityEntity = this.shared.sdk.Community()
      const q = msg.q || {}
  
      const communityList = await communityEntity.list(q)
      const dataList = communityList.map((n: any) => n.data())
  
      let items = dataList.map((data: any) => entize(data))
      return items
    }
  }
  
  
  // Create operation is implemented by seneca entity save
  
    // #UpdateOp
  
  
  cmd.remove = {
    action: async function remove_community(this: any, entize: any, msg: any) {
      const communityEntity = this.shared.sdk.Community()
      let reqdata = msg.ent.data$()
  
      const resdata = await communityEntity.remove(reqdata)
  
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
    makeCommunityActions
  }
