import {Node, Block, Inline, Text, INLINES, BLOCKS, Mark} from '../types';

/**
 * Checks if the node is an instance of Inline.
 */
export function isInline(node: Node): node is Inline {
  const keysOf = Object.keys(node);
  console.log('kreys', keysOf);
  // @ts-ignore
  return Object.values(INLINES).includes(node);
}

/**
 * Checks if the node is an instance of Mark.
 */
export function isMark(node: Mark): node is Mark {
  const keysOf = Object.keys(node);
  const valuesOf = Object.values(INLINES);
  // @ts-ignore
  const intersection = keysOf.filter(element => valuesOf.includes(element));

  console.log('intersection', node);
  return intersection.length >= 0;
}

/**
 * Checks if the node is an instance of Block.
 */
export function isBlock(node: Block): node is Block {
  return Object.values(BLOCKS).includes(node.type);
}

/**
 * Checks if the node is an instance of Text.
 */
export function isText(node: Node): node is Text {
  return node.type === 'text';
}

/**
 * Checks if the node is an instance of Text.
 */
export function hasValue(node: Text) {
  return node.text !== undefined || typeof node.text === 'string';
}
