import type { ContentAccess, MemberStatus } from "./types";

export function canAccessContent(access: ContentAccess, memberStatus: MemberStatus): boolean {
  return access === "preview" || memberStatus === "member";
}
