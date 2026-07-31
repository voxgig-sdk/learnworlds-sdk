// CourseAnalytics A

  function makeCourseAnalyticsActions() {
  
    const cmd: any = {}
  
  
  
  cmd.load = {
    action: async function load_course_analytics(this: any, entize: any, msg: any) {
      const course_analyticsEntity = this.shared.sdk.CourseAnalytics()
      const q = msg.q || {}
  
      const resdata = await course_analyticsEntity.load(q)
  
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
    makeCourseAnalyticsActions
  }
