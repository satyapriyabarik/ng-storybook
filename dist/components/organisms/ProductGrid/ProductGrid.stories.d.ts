import type { Meta, StoryObj } from "@storybook/react";
import ProductGrid from "./ProductGrid";
declare const meta: Meta<typeof ProductGrid>;
export default meta;
type Story = StoryObj<typeof ProductGrid>;
export declare const Default: Story;
export declare const Loading: Story;
export declare const Empty: Story;
