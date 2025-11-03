import type { Meta, StoryObj } from "@storybook/react";
import { ToastProvider } from "./Toast";
declare const meta: Meta<typeof ToastProvider>;
export default meta;
type Story = StoryObj<typeof ToastProvider>;
export declare const Default: Story;
export declare const BottomCenter: Story;
