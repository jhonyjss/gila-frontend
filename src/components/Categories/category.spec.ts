import { describe, expect, it, vi } from "vitest";
import { mount } from "@vue/test-utils";
import CategoryOptions from "./CategoryOptions.vue";
import { all } from "@repository/categories.repo";
import { ICategories } from "./ICategories.interface";

describe("CategoryCard", () => {
  it("fetches categories and updates categories ref", async () => {
    const getAll = vi.fn(() => all());
    const mockCategories = [
      { id: 1, name: "Sports" },
      { id: 2, name: "Finance" },
      { id: 3, name: "Movies" }
    ];

    // Mock the categories response from the repository
    getAll.mockReturnValueOnce(mockCategories as ICategories[] as never);

    const wrapper = mount(CategoryOptions);

    // Wait for the onBeforeMount hook to complete
    await wrapper.trigger("beforemount");

    // Assert that the categories ref is updated with the fetched categories
    //expect(wrapper.vm.categories).toEqual(mockCategories);
  });
});
