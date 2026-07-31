// CommunityPost A

  function makeCommunityPostActions() {
  
    const cmd: any = {}
  
  
  
  cmd.load = {
    action: async function load_community_post(this: any, entize: any, msg: any) {
      const community_postEntity = this.shared.sdk.CommunityPost()
      const q = msg.q || {}
  
      const resdata = await community_postEntity.load(q)
  
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
    makeCommunityPostActions
  }
