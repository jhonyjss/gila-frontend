import { describe, expect, it, vi } from "vitest";
import { mount } from "@vue/test-utils";
import CategoryCard from "../components/Categories/CategoryCard.vue";
import { all } from "@repository/categories.repo";
import { ICategories } from "@components/Categories/ICategories.interface";
import { ref } from "vue";

describe("App", () => {
  it("fetches categories and updates categories ref", async () => {
    const getAll = vi.fn(() => all());
    const mockCategories = [
      { id: 1, name: "Sports" },
      { id: 2, name: "Finance" },
      { id: 3, name: "Movies" }
    ];
    const categories = ref(mockCategories);

    // Mock the categories response from the repository
    getAll.mockReturnValueOnce(mockCategories as ICategories[] as never);

    const wrapper = mount(CategoryCard, {
      props: {
        title: categories.value[0].name // Provide the title prop value here
      }
    });

    // Wait for the onBeforeMount hook to complete
    await wrapper.trigger("beforemount");
    await wrapper.vm.$nextTick();

    expect(wrapper.text()).toContain(categories.value[0].name);

    categories.value = mockCategories;

    // Wait for the next tick for the component to update
    await wrapper.vm.$nextTick();

    // Assert that the updated category title is rendered correctly
    expect(wrapper.text()).toContain(categories.value[0].name);
  });
});
