import { IsArray, IsBoolean, IsEmail, IsIn, IsOptional, IsString, IsUUID } from 'class-validator';

export const CAMPAIGN_AUDIENCE_TYPES = ['list', 'tags', 'contacts'] as const;

export class CreateCampaignDto {
  @IsString()
  name!: string;

  @IsUUID()
  templateId!: string;

  @IsOptional()
  @IsIn(CAMPAIGN_AUDIENCE_TYPES)
  audienceType?: (typeof CAMPAIGN_AUDIENCE_TYPES)[number];

  @IsOptional()
  @IsArray()
  @IsUUID('4', { each: true })
  listIds?: string[];

  @IsOptional()
  @IsArray()
  @IsUUID('4', { each: true })
  excludeListIds?: string[];

  @IsOptional()
  @IsArray()
  @IsUUID('4', { each: true })
  tagIds?: string[];

  @IsOptional()
  @IsArray()
  @IsUUID('4', { each: true })
  contactIds?: string[];

  @IsOptional()
  @IsBoolean()
  isDryRun?: boolean;

  @IsOptional()
  @IsEmail()
  sendToEmail?: string;

  // GC-125 — null/omitted keeps the existing quota-based auto-pick
  // (invariant 7). When set, checked at send time and the send hard-fails
  // if the account is inactive/exhausted rather than silently falling back.
  @IsOptional()
  @IsUUID()
  senderAccountId?: string;

  @IsOptional()
  @IsString()
  fromName?: string;

  @IsOptional()
  @IsEmail()
  replyTo?: string;
}
