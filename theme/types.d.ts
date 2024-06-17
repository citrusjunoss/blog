declare module 'virtual-post-data' {
  import { PostInfo } from '../../../plugins/plugin-post-resolver'

  const postInfos: PostInfo[]
}

declare module 'virtual-post-tags' {
  import { PostTag } from '../../../plugins/plugin-post-resolver'

  export const postTags: PostTag[]
}

declare module 'virtual-post-categories' {
  import { PostCategory } from '../../../plugins/plugin-post-resolver'

  export const postCategories: PostCategory[]
}
