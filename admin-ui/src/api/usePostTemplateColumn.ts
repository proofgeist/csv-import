import { useMutation, UseMutationResult, useQueryClient } from "react-query";
import { ApiResponse, TemplateColumnFormFields } from "./types";
import { post } from "./api";

export default function usePostTemplateColumn(): UseMutationResult<ApiResponse<any>> {
  const queryClient = useQueryClient();

  return useMutation((values) => postTemplateColumn(values as TemplateColumnFormFields), {
    onSettled: () => {
      // queryClient.removeQueries("templates");
      // if (id) queryClient.invalidateQueries(["template", id]);
    },
  });
}

async function postTemplateColumn(values: TemplateColumnFormFields): Promise<ApiResponse<any>> {
  const response = await post("template-column", values);

  if (!response.ok) throw response.error;

  return {
    ok: true,
    error: "",
    data: response.data,
  };
}
