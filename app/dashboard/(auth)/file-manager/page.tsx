import { generateMeta } from "@/lib/utils";
import { FileTypeStorageCards } from "./cards/file-type-storage-cards";
import { FolderListCards } from "./cards/folder-list-cards";
import { RecentFilesCard } from "./cards/recent-files-card";
import { FileUploadDialog } from "./file-upload-dialog";
import { StorageStatusCard } from "./cards/storage status-card";
import { MonthlyFileTransferCard } from "./cards/monthly-file-transfer-card";

export async function generateMetadata() {
  return generateMeta({
    title: "File Manager Dashboard",
    description:
      "An admin dashboard template for managing files, folders, and monitoring storage status. Perfect for building streamlined file management systems.",
    canonical: "/file-manager"
  });
}

export default function Page() {
  return (
    <>
      <div className="mb-4 flex flex-col space-y-2 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
        <h1 className="mb-4 text-2xl font-bold tracking-tight lg:mb-0">File Manager</h1>
        <FileUploadDialog />
      </div>
      <FileTypeStorageCards />
      <div className="mb-4 grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <FolderListCards />
        </div>
        <StorageStatusCard />
      </div>
      <div className="gap-4 space-y-4 lg:grid lg:grid-cols-2 lg:space-y-0">
        <MonthlyFileTransferCard />
        <RecentFilesCard />
      </div>
    </>
  );
}
