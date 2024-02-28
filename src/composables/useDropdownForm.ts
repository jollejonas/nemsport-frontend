import { reactive } from 'vue';

interface UseDropdownFormOptions<T> {
    initialStateFactory: () => T;
}

export function useDropdownForm<T extends object>(options: UseDropdownFormOptions<T>) {
    const state = reactive({
        isDropdownOpen: false,
        formData: options.initialStateFactory(),
        resetForm() {
            // Directly reset the formData to its initial state
            Object.assign(this.formData, options.initialStateFactory());
        },
        updateFormData(updatedData: Partial<T>) {
            Object.assign(this.formData, updatedData);
        }
    });

    // Toggle dropdown open state
    function toggleDropdown() {
        state.isDropdownOpen = !state.isDropdownOpen;
    }

    return {
        state,
        toggleDropdown,
    };
}
