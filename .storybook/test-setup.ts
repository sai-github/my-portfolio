/**
 * Storybook Test Environment Setup
 *
 * This file addresses React 18 act() warnings in Storybook 8.x.
 *
 * ISSUE:
 * Storybook's internal components (Root, InlineStory, DocsRenderer, etc.)
 * trigger React act() warnings because their state updates aren't wrapped
 * in act(). This is a known Storybook bug, not an issue with your components.
 *
 * OFFICIAL WORKAROUNDS (from Storybook maintainers):
 *
 * Option 1 - Disable Strict Mode (cleaner, but loses strict mode benefits):
 *   In preview.ts, add: parameters: { reactOptions: { strictMode: false } }
 *
 * Option 2 - Suppress Warnings (preserves strict mode):
 *   Filter console.error to hide act() warnings (implemented below)
 *
 * RESOLUTION:
 * This issue is fixed in Storybook 9.0. Once you upgrade to Storybook 9.x,
 * you can remove this file and the import in preview.ts.
 *
 * References:
 * - https://github.com/storybookjs/storybook/issues/30356
 * - https://github.com/storybookjs/storybook/issues/22297
 * - https://github.com/storybookjs/storybook/issues/20729
 */

// Configure React test environment
// @ts-expect-error - global type augmentation
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

// Suppress React act() warnings from Storybook internals (Option 2)
const originalError = console.error;
console.error = (...args: unknown[]) => {
  const message = typeof args[0] === "string" ? args[0] : "";
  if (message.includes("was not wrapped in act")) {
    return;
  }
  originalError.apply(console, args);
};
