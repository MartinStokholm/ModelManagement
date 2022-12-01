using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ModelsApi.Migrations
{
    public partial class initialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Accounts",
                columns: table => new
                {
                    EfAccountId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Email = table.Column<string>(type: "nvarchar(254)", maxLength: 254, nullable: false),
                    PwHash = table.Column<string>(type: "nvarchar(60)", maxLength: 60, nullable: false),
                    IsManager = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Accounts", x => x.EfAccountId);
                });

            migrationBuilder.CreateTable(
                name: "Jobs",
                columns: table => new
                {
                    EfJobId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Customer = table.Column<string>(type: "nvarchar(64)", maxLength: 64, nullable: true),
                    StartDate = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    Days = table.Column<int>(type: "int", nullable: false),
                    Location = table.Column<string>(type: "nvarchar(128)", maxLength: 128, nullable: true),
                    Comments = table.Column<string>(type: "nvarchar(2000)", maxLength: 2000, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Jobs", x => x.EfJobId);
                });

            migrationBuilder.CreateTable(
                name: "Managers",
                columns: table => new
                {
                    EfManagerId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EfAccountId = table.Column<long>(type: "bigint", nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(64)", maxLength: 64, nullable: true),
                    LastName = table.Column<string>(type: "nvarchar(32)", maxLength: 32, nullable: true),
                    Email = table.Column<string>(type: "nvarchar(254)", maxLength: 254, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Managers", x => x.EfManagerId);
                    table.ForeignKey(
                        name: "FK_Managers_Accounts_EfAccountId",
                        column: x => x.EfAccountId,
                        principalTable: "Accounts",
                        principalColumn: "EfAccountId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Models",
                columns: table => new
                {
                    EfModelId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EfAccountId = table.Column<long>(type: "bigint", nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(64)", maxLength: 64, nullable: true),
                    LastName = table.Column<string>(type: "nvarchar(32)", maxLength: 32, nullable: true),
                    Email = table.Column<string>(type: "nvarchar(254)", maxLength: 254, nullable: true),
                    PhoneNo = table.Column<string>(type: "nvarchar(12)", maxLength: 12, nullable: true),
                    AddresLine1 = table.Column<string>(type: "nvarchar(64)", maxLength: 64, nullable: true),
                    AddresLine2 = table.Column<string>(type: "nvarchar(64)", maxLength: 64, nullable: true),
                    Zip = table.Column<string>(type: "nvarchar(9)", maxLength: 9, nullable: true),
                    City = table.Column<string>(type: "nvarchar(64)", maxLength: 64, nullable: true),
                    Country = table.Column<string>(type: "nvarchar(64)", maxLength: 64, nullable: true),
                    BirthDate = table.Column<DateTime>(type: "date", nullable: false),
                    Nationality = table.Column<string>(type: "nvarchar(64)", maxLength: 64, nullable: true),
                    Height = table.Column<double>(type: "float", nullable: false),
                    ShoeSize = table.Column<int>(type: "int", nullable: false),
                    HairColor = table.Column<string>(type: "nvarchar(32)", maxLength: 32, nullable: true),
                    EyeColor = table.Column<string>(type: "nvarchar(32)", maxLength: 32, nullable: true),
                    Comments = table.Column<string>(type: "nvarchar(1000)", maxLength: 1000, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Models", x => x.EfModelId);
                    table.ForeignKey(
                        name: "FK_Models_Accounts_EfAccountId",
                        column: x => x.EfAccountId,
                        principalTable: "Accounts",
                        principalColumn: "EfAccountId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Expenses",
                columns: table => new
                {
                    EfExpenseId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ModelId = table.Column<long>(type: "bigint", nullable: false),
                    JobId = table.Column<long>(type: "bigint", nullable: false),
                    Date = table.Column<DateTime>(type: "date", nullable: false),
                    Text = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    amount = table.Column<decimal>(type: "decimal(9,2)", nullable: false),
                    EfModelId = table.Column<long>(type: "bigint", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Expenses", x => x.EfExpenseId);
                    table.ForeignKey(
                        name: "FK_Expenses_Models_EfModelId",
                        column: x => x.EfModelId,
                        principalTable: "Models",
                        principalColumn: "EfModelId");
                });

            migrationBuilder.CreateTable(
                name: "JobModels",
                columns: table => new
                {
                    EfJobId = table.Column<long>(type: "bigint", nullable: false),
                    EfModelId = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_JobModels", x => new { x.EfJobId, x.EfModelId });
                    table.ForeignKey(
                        name: "FK_JobModels_Jobs_EfJobId",
                        column: x => x.EfJobId,
                        principalTable: "Jobs",
                        principalColumn: "EfJobId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_JobModels_Models_EfModelId",
                        column: x => x.EfModelId,
                        principalTable: "Models",
                        principalColumn: "EfModelId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Accounts_Email",
                table: "Accounts",
                column: "Email",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Expenses_EfModelId",
                table: "Expenses",
                column: "EfModelId");

            migrationBuilder.CreateIndex(
                name: "IX_JobModels_EfModelId",
                table: "JobModels",
                column: "EfModelId");

            migrationBuilder.CreateIndex(
                name: "IX_Managers_EfAccountId",
                table: "Managers",
                column: "EfAccountId");

            migrationBuilder.CreateIndex(
                name: "IX_Managers_Email",
                table: "Managers",
                column: "Email",
                unique: true,
                filter: "[Email] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Models_EfAccountId",
                table: "Models",
                column: "EfAccountId");

            migrationBuilder.CreateIndex(
                name: "IX_Models_Email",
                table: "Models",
                column: "Email",
                unique: true,
                filter: "[Email] IS NOT NULL");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Expenses");

            migrationBuilder.DropTable(
                name: "JobModels");

            migrationBuilder.DropTable(
                name: "Managers");

            migrationBuilder.DropTable(
                name: "Jobs");

            migrationBuilder.DropTable(
                name: "Models");

            migrationBuilder.DropTable(
                name: "Accounts");
        }
    }
}
