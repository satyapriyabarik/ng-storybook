import type { Meta, StoryObj } from "@storybook/react";
import { Grid } from "./Grid";
import "./Grid.module.css";
declare const meta: Meta<typeof Grid>;
export default meta;
type Story = StoryObj<typeof Grid>;
export declare const Default: Story;
export declare const Fluid: Story;
export declare const Responsive: Story;
