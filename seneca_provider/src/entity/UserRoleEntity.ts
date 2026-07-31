// UserRole A

  function makeUserRoleActions() {
  
    const cmd: any = {}
  
    // #LoadOp
  
  
  cmd.list = {
    action: async function list_user_role(this: any, entize: any, msg: any) {
      const user_roleEntity = this.shared.sdk.UserRole()
      const q = msg.q || {}
  
      const user_roleList = await user_roleEntity.list(q)
      const dataList = user_roleList.map((n: any) => n.data())
  
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
    makeUserRoleActions
  }
