import React from "react";
import {
  IconGitPullRequest,
  IconAlertCircle,
  IconMessages,
  IconDatabase,
  IconHome2
} from "@tabler/icons-react";
import { ThemeIcon, UnstyledButton, Group, Text } from "@mantine/core";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
// import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  url: string;
  router: AppRouterInstance;
}

function MainLink({ icon, color, label, router, url }: MainLinkProps) {

  return (
    <UnstyledButton
      onClick={() => {
        router.push(url);
      }}
      
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="xl">{label}</Text>
      </Group>
    </UnstyledButton>
  );
}

const data = [
  {
    icon: <IconHome2 size="1rem" />,
    color: "blue",
    label: "หน้าหลัก",
    url: "/dashboard"
  },
  {
    icon: <IconAlertCircle size="1rem" />,
    color: "teal",
    label: "จัดการประเภทข่าว",
    url: "./dashboard/newstype"
  },
  {
    icon: <IconDatabase size="1rem" />,
    color: "teal",
    label: "รายงาน OPD",
    url: "./dashboard/opdType"
  },
  // { icon: <IconMessages size="1rem" />, color: "violet", label: "Discussions" },
  // { icon: <IconDatabase size="1rem" />, color: "grape", label: "Databases" },
];

export function MainLinks() {
  const router = useRouter();
  
  const links = data.map((link) => <MainLink {...link} router={router}  key={link.label} />);
  return <div>{links}</div>;
}
