
import * as Path from 'node:path'

import {
  cmp, each, names, cmap,
  List, File, Content, Copy, Folder, Fragment, Line, Slot,
} from '@voxgig/sdkgen'


import { Package } from './Package_seneca_provider'
import { MainEntity } from './MainEntity_seneca_provider'


const Main = cmp(async function Main(props: any) {
  const { target } = props
  const { model } = props.ctx$

  const { entity } = model.main.api
  const { feature } = model.main.kit

  Package({ target })

  Folder({ name: 'src' }, () => {

    File({ name: model.const.Name + 'Provider.' + target.ext }, () => {

      Line(`// ${model.const.Name} Seneca Provider\n`)

      List({ item: entity }, ({ item }: any) =>
        Line(`import { make${item.Name}Actions } from './entity/${item.Name}Entity'`))

      Fragment(
        {
          from: Path.normalize(__dirname + '/../../../src/cmp/seneca_provider/fragment/Main.fragment.ts'),
          replace: {
            ...props.ctx$.stdrep,
          }
        },

        // Entities
        () => {

          Slot({ name: 'entity' }, () => {
            each(entity, (entity: any) => {
              const entprops = { target, entity, entitySDK: model.main.api.entity[entity.name] }
              MainEntity(entprops)
            })
          })

        })
    })


  })
})


export {
  Main
}
