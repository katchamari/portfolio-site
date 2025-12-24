"use client";
import CodingSectionItem from "@/components/CodingSection/CodingSectionItem/CodingSectionItem";
import { altLayout } from "@/functions/applyLayout";
import { fetchDatabase } from "@/functions/fetchDatabase";
import { Code } from "@/types/db";
import { useRouter } from "next/router";
import { ReactNode, useState, useEffect } from "react";

export default function Page() {
  const router = useRouter();
  const { id } = router.query;
  const [project, setProject] = useState<Code | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  console.log(id);
  useEffect(() => {
    async function fetchData() {
      if (id) {
        const title = decodeURIComponent(id?.toString());
        const response = fetchDatabase("code", (item) => item.title === title);
        const fetchedProject = response.data?.[0];
        setProject(fetchedProject); // Update state asynchronously
        setLoading(false); // Set loading to false after fetching data
      }
    }

    fetchData(); // Invoke async function
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!project) {
    return <div>No project found</div>;
  }

  return <CodingSectionItem viewType="details" project={project} />;
}

Page.getLayout = (page: ReactNode) => altLayout(page, "Project");
