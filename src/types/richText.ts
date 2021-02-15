export interface ContentfulRichText {
  children: ContentfulRichTextJson;
}

interface ContentfulRichTextJson {
  children: ContentfulRichTextContent[];
}

interface ContentfulRichTextContent {
  children: ContentfulRichTextContent[];
  type: 'paragraph' | 'text';
  text: string;
}
