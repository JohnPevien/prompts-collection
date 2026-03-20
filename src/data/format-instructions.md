# Documentation: Transforming Input Prompts to Standard JSON Format

## 1. Objective

The goal of this process is to convert raw prompt ideas or existing prompt collections into a standardized JSON format. This standard format consists of a **JSON array**, where each object represents a single prompt and contains specific fields for identification, description, instruction, categorization, and tagging. This consistency makes the prompts easier to manage, search, filter, and potentially integrate into applications or workflows (like accessing them programmatically or feeding them into AI tools).

## 2. Required Input Format

The process expects the input data to be a **JSON array `[]`**. Each element within this array must be a **JSON object `{}`** containing _at least_ the following key-value pairs:

- **`id`** (`String`): A unique identifier for the prompt. It's recommended to use a "slug" format (lowercase, words separated by hyphens, e.g., `generate-email-subject-line-v1`). This `id` will be carried over directly to the output.
- **`prompt`** (`String`): The full, detailed text of the prompt or instruction that will be executed or used.
- **`category`** (`String`): A broad classification for the prompt (e.g., "Coding", "Email Marketing", "Content Creation", "Data Analysis", "Youtube", "Facebook").

**Example Input Object:**

```json
{
    "id": "python-list-comprehension-explainer",
    "prompt": "Explain Python list comprehensions with a simple example and compare it to a traditional for loop.",
    "category": "Coding Education"
}
```

_(Note: Additional fields in the input object will be ignored during this transformation process unless specified otherwise.)_

## 3. Transformation Process (Step-by-Step)

The transformation follows these steps for each object in the input array:

1.  **Receive Input Array:** Start with the valid JSON array as described above.
2.  **Initialize Output Array:** Create an empty `[]` that will hold the transformed prompt objects.
3.  **Iterate Through Input Objects:** Process each object within the input array one by one.
4.  **For Each Input Object:**
    - **a. Extract `id`:** Retrieve the value associated with the `id` key.
    - **b. Extract `prompt`:** Retrieve the value associated with the `prompt` key.
    - **c. Extract `category`:** Retrieve the value associated with the `category` key.
    - **d. Generate `title`:** Analyze the `prompt` text to create a concise, human-readable summary of its purpose. This `title` should clearly indicate what the prompt does. (e.g., "Explain Python List Comprehensions", "Generate Catchy Email Subject Lines").
    - **e. Generate `tags`:** Analyze the `prompt` and `category` to identify relevant keywords, themes, concepts, or technologies. Convert these into an array of strings. Follow the guidelines below for consistency.
    - **f. Assemble Output Object:** Create a new JSON object with the following structure, populating it with the values from steps 4a-4e:
        ```json
        {
          "id": "...",       // From step 4a
          "title": "...",    // From step 4d
          "prompt": "...",   // From step 4b
          "category": "...", // From step 4c
          "tags": [...]      // From step 4e
        }
        ```
    - **g. Append to Output Array:** Add the newly assembled object (from step 4f) to the output array initialized in step 2.
5.  **Finalize Output:** Once all input objects have been processed, the output array contains the complete set of standardized prompt objects.

## 4. Expected Output Format

The final output will be a **JSON array `[]`**. Each element in the array is a **JSON object `{}`** structured as follows:

- **`id`** (`String`): The unique slug identifier (preserved from input).
- **`title`** (`String`): A concise, descriptive title generated from the prompt.
- **`prompt`** (`String`): The original, full prompt text (preserved from input).
- **`category`** (`String`): The broad category (preserved from input).
- **`tags`** (`Array<String>`): An array of relevant keywords/themes generated from the prompt and category.

**Example Output Object (corresponding to the input example):**

```json
{
    "id": "python-list-comprehension-explainer",
    "title": "Explain Python List Comprehensions vs For Loop",
    "prompt": "Explain Python list comprehensions with a simple example and compare it to a traditional for loop.",
    "category": "Coding Education",
    "tags": [
        "python",
        "list-comprehension",
        "for-loop",
        "coding-concepts",
        "examples",
        "education"
    ]
}
```

## 5. Guidelines for Generating `title` and `tags`

- **`title`:**
    - Keep it brief but informative. Aim for clarity.
    - Use consistent capitalization (e.g., Title Case or Sentence case).
    - Should accurately reflect the core action or purpose of the `prompt`.
- **`tags`:**
    - Use **lowercase** characters only.
    - Use **kebab-case** for multi-word tags (e.g., `social-media`, `data-analysis`).
    - Include keywords related to the subject matter, the action being performed, the tools/languages involved, and the context/platform.
    - Consider adding the `category` itself as a tag if it provides useful context.
    - Aim for a reasonable number of relevant tags (e.g., 3-5 tags).
