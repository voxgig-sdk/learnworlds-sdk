// Assessment A

  function makeAssessmentActions() {
  
    const cmd: any = {}
  
    // #LoadOp
  
  
  cmd.list = {
    action: async function list_assessment(this: any, entize: any, msg: any) {
      const assessmentEntity = this.shared.sdk.Assessment()
      const q = msg.q || {}
  
      const assessmentList = await assessmentEntity.list(q)
      const dataList = assessmentList.map((n: any) => n.data())
  
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
    makeAssessmentActions
  }
