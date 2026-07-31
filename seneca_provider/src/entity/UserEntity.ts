// User A

  function makeUserActions() {
  
    const cmd: any = {}
  
  
  
  cmd.load = {
    action: async function load_user(this: any, entize: any, msg: any) {
      const userEntity = this.shared.sdk.User()
      const q = msg.q || {}
  
      const resdata = await userEntity.load(q)
  
      let item = entize(resdata)
      return item
    }
  }
  
  
  
  cmd.list = {
    action: async function list_user(this: any, entize: any, msg: any) {
      const userEntity = this.shared.sdk.User()
      const q = msg.q || {}
  
      const userList = await userEntity.list(q)
      const dataList = userList.map((n: any) => n.data())
  
      let items = dataList.map((data: any) => entize(data))
      return items
    }
  }
  
  
  // Create operation is implemented by seneca entity save
  
  
  cmd.save = {
    action: async function update_user(this: any, entize: any, msg: any) {
      const userEntity = this.shared.sdk.User()
      let reqdata = msg.ent.data$()
  
      const update = null !== reqdata.id
      const resdata = await (update ?
        userEntity.update(reqdata) :
        userEntity.create(reqdata))
  
      let item = null
  
      if (resdata) {
        item = entize(resdata)
      }
  
      return item
    }
  }
  
  
  
  cmd.remove = {
    action: async function remove_user(this: any, entize: any, msg: any) {
      const userEntity = this.shared.sdk.User()
      let reqdata = msg.ent.data$()
  
      const resdata = await userEntity.remove(reqdata)
  
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
    makeUserActions
  }
