import assert from 'node:assert/strict'
import { test } from 'node:test'
import { wrapText } from './text.ts'

test('wraps words without exceeding the requested width', () => {
  assert.deepEqual(wrapText('The quick brown fox', 10), [
    'The quick',
    'brown fox',
  ])
})

test('keeps words together when they exactly fit', () => {
  assert.deepEqual(wrapText('abc def', 7), ['abc def'])
})

test('collapses repeated whitespace between words', () => {
  assert.deepEqual(wrapText('hello   world\tfrom\ntextmode', 13), [
    'hello world',
    'from textmode',
  ])
})

test('ignores empty and whitespace-only input', () => {
  assert.deepEqual(wrapText('', 10), [])
  assert.deepEqual(wrapText('   \t\n', 10), [])
})

test('keeps words longer than the requested width intact', () => {
  assert.deepEqual(wrapText('supercalifragilisticexpialidocious', 5), [
    'supercalifragilisticexpialidocious',
  ])
})

test('continues wrapping after an overlong word', () => {
  assert.deepEqual(wrapText('verylongword next', 5), [
    'verylongword',
    'next',
  ])
})

test('emits each word when the width is zero', () => {
  assert.deepEqual(wrapText('a b', 0), ['a', 'b'])
})
