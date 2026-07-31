// CourseContent A

  function makeCourseContentActions() {
  
    const cmd: any = {}
  
    // #LoadOp
  
  
  cmd.list = {
    action: async function list_course_content(this: any, entize: any, msg: any) {
      const course_contentEntity = this.shared.sdk.CourseContent()
      const q = msg.q || {}
  
      const course_contentList = await course_contentEntity.list(q)
      const dataList = course_contentList.map((n: any) => n.data())
  
      let items = dataList.map((data: any) => entize(data))
      return items
    }
  }
  
  
  // Create operation is implemented by seneca entity save
  
    // #UpdateOp
  
    // #RemoveOp
  
    return { cmd }
  }
  
  
  export {
    makeCourseContentActions
  }
